import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const CreateDestination = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Название обязательно'),
    country: Yup.string().required('Страна обязательна'),
    description: Yup.string()
      .min(10, 'Описание должно содержать не менее 10 символов')
      .max(500, 'Описание не должно превышать 500 символов')
      .required('Описание обязательно'),
    image: Yup.string().url('Введите корректный URL изображения').required('Изображение обязательно')
  });

  const initialValues = {
    name: '',
    country: '',
    description: '',
    image: ''
  };

  const handleSubmit = (values) => {
    console.log('Submitted values:', values);
  };

  return (
    <div className="flex justify-center items-center min-h-screen  bg-gray-50 p-4">
      <div className="w-full max-w-xl bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Create Destination</h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              {/* Name Field */}
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-600">Name</label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              {/* Country Field */}
              <div className="mb-4">
                <label htmlFor="country" className="block text-sm font-medium text-gray-600">Country</label>
                <Field
                  type="text"
                  id="country"
                  name="country"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <ErrorMessage name="country" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              {/* Description Field */}
              <div className="mb-4">
                <label htmlFor="description" className="block text-sm font-medium text-gray-600">Description</label>
                <Field
                  as="textarea"
                  id="description"
                  name="description"
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <ErrorMessage name="description" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              {/* Image Field */}
              <div className="mb-4">
                <label htmlFor="image" className="block text-sm font-medium text-gray-600">Image URL</label>
                <Field
                  type="text"
                  id="image"
                  name="image"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <ErrorMessage name="image" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50"
              >
                Создать направление
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CreateDestination;
