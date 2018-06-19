const express = require("express");

const router = express.Router();

const passport = require("passport");
const User = require("../../models/User");

const Profile = require("../../models/Profile");

router.get("/test", (req, res) => {
  res.json({ message: "this is test from profiles" });
});

router.get("/all", (req, res) => {
  Profile.find({}, (err, profiles) => {
    if (err) {
      res.status(404).json({ message: "cannot find the profiles" });
    } else {
      res.json(profiles);
    }
  });
});

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id })
      .populate("user", ["name", "avatar"], User)
      .then(profile => {
        if (profile) {
          res.json(profile);
        } else {
          res.status(400).json({ message: "There is no profile of that user" });
        }
      })

      .catch(e => console.log(e));
  }
);

router.get(
  "/user/:user_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.params.user_id }, (err, profile) => {
      if (!profile) {
        res
          .status(404)
          .json({ message: "There is no profile with this user id" });
      } else {
        res.status(201).json(profile);
      }
    });
  }
);

router.get(
  "/handle/:handle",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ handle: req.params.handle }, (err, profile) => {
      if (!profile) {
        res.status(404).json({
          message: "There is no profile witn this handle name"
        });
      } else {
        res.status(201).json(profile);
      }
    });
  }
);

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    var { errors, isValid } = require("../../validation/profile")(req.body);
    if (!isValid) {
      res.status(401).json(errors);
    }

    Profile.findOne({ user: req.user.id }, (err, profile) => {
      const profileFields = {};
      profileFields.user = req.user.id;
      req.body.handle ? (profileFields.handle = req.body.handle) : "";
      req.body.company ? (profileFields.company = req.body.company) : "";
      req.body.location ? (profileFields.location = req.body.location) : "";
      req.body.status ? (profileFields.status = req.body.status) : "";
      req.body.bio ? (profileFields.bio = req.body.bio) : "";
      req.body.githubUsername
        ? (profileFields.githubUsername = req.body.githubUsername)
        : "";
      req.body.website ? (profileFields.website = req.body.website) : "";

      if (typeof req.body.skills !== undefined) {
        profileFields.skills = req.body.skills.split(",");
      }

      profileFields.social = {};
      req.body.youtube ? (profileFields.social.youtube = req.body.youtube) : "";
      req.body.twitter ? (profileFields.social.twitter = req.body.twitter) : "";
      req.body.facebook
        ? (profileFields.social.facebook = req.body.facebook)
        : "";
      req.body.instagram
        ? (profileFields.social.instagram = req.body.instagram)
        : "";
      req.body.linkedin
        ? (profileFields.social.linkedin = req.body.linkedin)
        : "";

      if (profile) {
        // Profile.findOneAndUpdate(
        //   { user: req.user.id },
        //   { $set: profileFields },
        //   { new: true }
        // );

        profile.handle = profileFields.handle;
        profile.status = profileFields.status;
        profile.skills = profileFields.skills;
        profile.location = profileFields.location;
        profile.website = profileFields.website;
        profile.githubUsername = profileFields.githubUsername;
        profile.company = profileFields.company;
        profile.bio = profileFields.bio;
        profile.youtube = profileFields.social.youtube;
        profile.facebook = profileFields.social.facebook;
        profile.instagram = profileFields.social.instagram;
        profile.linkedin = profileFields.social.linkedin;
        profile.twitter = profileFields.social.twitter;

        profile
          .save()
          .then(profile => res.status(201).json(profile))
          .catch(e => {
            res.status(400).json({ message: "cannot update the data" });
          });
      } else {
        Profile.findOne({ handle: profileFields.handle }).then(profile => {
          if (profile) {
            res.status(400).json({
              message: "there is already a profile with this handle name"
            });
          } else {
            const newProfile = new Profile(profileFields);
            newProfile
              .save()
              .then(profile => res.json(profile))
              .catch(e => res.status(400).json(e));
          }
        });
      }
    });
  }
);

router.post(
  "/experience",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { isValid, errors } = require("../../validation/experience")(
      req.body
    );
    if (!isValid) {
      res.status(400).json(errors);
    }

    Profile.findOne({ user: req.user.id }).then(profile => {
      const newExp = {
        title: req.body.title,
        company: req.body.company,
        from: req.body.from,
        to: req.body.to,
        locaton: req.body.locaton,
        description: req.body.description,
        current: req.body.current
      };
      profile.experience.unshift(newExp);
      profile.save().then(exp => res.json(exp));
    });
  }
);

router.post(
  "/education",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { isValid, errors } = require("../../validation/education")(req.body);
    if (!isValid) {
      res.status(400).json(errors);
    }

    Profile.findOne({ user: req.user.id }).then(profile => {
      const newEdu = {
        school: req.body.school,
        degree: req.body.degree,
        from: req.body.from,
        to: req.body.to,
        fieldOfStudy: req.body.fieldOfStudy,
        description: req.body.description,
        current: req.body.current
      };
      profile.education.unshift(newEdu);
      profile.save().then(edu => res.json(edu));
    });
  }
);

router.delete(
  "/experience/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }, (err, profile) => {
      if (err) {
        res.status(404).json(err);
      } else {
        const removeIndex = profile.experience
          .map(item => item._id)
          .indexOf(req.params.id);
        profile.experience.splice(removeIndex, 1);

        profile.save().then(profile => res.json(profile));
      }
    });
  }
);

router.delete(
  "/education/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }, (err, profile) => {
      if (err) {
        res.status(404).json(err);
      } else {
        const removeIndex = profile.education
          .map(item => item._id)
          .indexOf(req.params.id);
        profile.education.splice(removeIndex, 1);

        profile.save().then(profile => res.json(profile));
      }
    });
  }
);

module.exports = router;
