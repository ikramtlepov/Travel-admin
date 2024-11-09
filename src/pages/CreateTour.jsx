import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const CreateTour = () => {
  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    price: Yup.number()
      .required('Price is required')
      .positive('Price must be a positive number')
      .integer('Price must be an integer'),
    img: Yup.string()
      .url('Invalid image URL')
      .required('Image URL is required'),
    description: Yup.string()
      .required('Description is required')
      .min(10, 'Description must be at least 10 characters')
      .max(500, 'Description cannot exceed 500 characters'),
    stars: Yup.number()
      .required('Rating is required')
      .min(1, 'Rating must be between 1 and 5')
      .max(5, 'Rating must be between 1 and 5'),
  });

  const initialValues = {
    title: '',
    price: '',
    img: '',
    description: '',
    stars: 1, // начальное значение для рейтинга
  };

  const handleSubmit = (values) => {
    console.log('Submitted values:', values);
    // Здесь можно отправить данные на сервер
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-xl bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Create Tour</h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, setFieldValue, values }) => (
            <Form>
              <div className="mb-4">
                <label htmlFor="title" className="block text-sm font-medium text-gray-600">Title</label>
                <Field
                  type="text"
                  id="title"
                  name="title"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <ErrorMessage name="title" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div className="mb-4">
                <label htmlFor="price" className="block text-sm font-medium text-gray-600">Price</label>
                <div className="flex items-center border border-gray-300 rounded-md">
                  <span className="p-2 text-gray-600">$</span>
                  <Field
                    type="number"
                    id="price"
                    name="price"
                    className="w-full p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <ErrorMessage name="price" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div className="mb-4">
                <label htmlFor="img" className="block text-sm font-medium text-gray-600">Image URL</label>
                <Field
                  type="text"
                  id="img"
                  name="img"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <ErrorMessage name="img" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div className="mb-4">
                <label htmlFor="description" className="block text-sm font-medium text-gray-600">Description</label>
                <Field
                  as="textarea"
                  id="description"
                  name="description"
                  rows="4"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <ErrorMessage name="description" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div className="mb-4">
                <label htmlFor="stars" className="block text-sm font-medium text-gray-600">Rating</label>
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <label key={star} className="flex items-center">
                      <Field
                        type="radio"
                        id={`star-${star}`}
                        name="stars"
                        value={star}
                        checked={values.stars === star} // Fix: ensure it reflects the selected value
                        onChange={() => setFieldValue('stars', star)} // Fix: updates the form value when clicked
                        className="mr-1"
                      />
                      {star} Star{star > 1 && 's'}
                    </label>
                  ))}
                </div>
                <ErrorMessage name="stars" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50"
              >
                Create Tour
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CreateTour;
