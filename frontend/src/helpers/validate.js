export const validate = (fields) => {

    let errors = {};

    if(!fields.name)
    {
        errors.name = 'Please fill this in'
    }

    if(!fields.image)
    {
        errors.image = 'Please upload an image'
    }

    return errors
}