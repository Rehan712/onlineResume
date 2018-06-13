const validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = data => {
	let errors = {};

	data.status = !isEmpty(data.status) ? data.status : '';
	data.handle = !isEmpty(data.handle) ? data.handle : '';
	data.skills = !isEmpty(data.skills) ? data.skills : '';
	if (!validator.isLength(data.handle, { min: 2, max: 30 })) {
		errors.handle = 'handle needs to be between 2 and 30';
	}

	if (validator.isEmpty(data.status)) {
		errors.status = 'status should be required';
	}
	if (validator.isEmpty(data.skills)) {
		errors.skills = 'Not an skills';
	}
	if (validator.isEmpty(data.handle)) {
		errors.handle = 'handle should be required';
	}

	if (!isEmpty(data.website)) {
		if (!validator.isUrl(data.website)) {
			errors.website = 'not a valid URL';
		}
	}

	if (!isEmpty(data.youtube)) {
		if (!validator.isUrl(data.youtube)) {
			errors.youtube = 'not a valid URL';
		}
	}

	if (!isEmpty(data.twitter)) {
		if (!validator.isUrl(data.twitter)) {
			errors.twitter = 'not a valid URL';
		}
	}

	if (!isEmpty(data.facebook)) {
		if (!validator.isUrl(data.facebook)) {
			errors.facebook = 'not a valid URL';
		}
	}

	if (!isEmpty(data.linkedin)) {
		if (!validator.isUrl(data.linkedin)) {
			errors.linkedin = 'not a valid URL';
		}
	}

	if (!isEmpty(data.instagram)) {
		if (!validator.isUrl(data.instagram)) {
			errors.instagram = 'not a valid URL';
		}
	}

	return {
		errors,
		isValid: isEmpty(errors)
	};
};
