import { useState } from 'react';
import { createCar } from '../Services/cars';

const initialForm = {
  make: '',
  model: '',
  year: '',
  trim: '',
  color: '',
  price_listed: '',
  milage: '',
  sale_pending: false,
  sold: false,
  days_on_lot: '',
  buyer: '',
  price_sold: '',
};

export default function AddCar() {
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { name, type, value, checked } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setMessage('');
    setError('');

    // Normalize values to match the API model types.
    const payload = {
      ...form,
      year: form.year ? Number(form.year) : null,
      price_listed: form.price_listed || null,
      milage: form.milage ? Number(form.milage) : null,
      days_on_lot: form.days_on_lot ? Number(form.days_on_lot) : null,
      price_sold: form.price_sold || null,
      buyer: form.buyer || null,
    };

    try {
      await createCar(payload);
      setForm(initialForm);
      setMessage('Car added successfully');
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="add-car">
      <h2>Add Car</h2>
      <p>Fill out the details below to add a car to inventory.</p>

      <form onSubmit={handleSubmit} className="add-car__form">
        <div className="grid">
          <label>
            Make*
            <input
              name="make"
              value={form.make}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Model*
            <input
              name="model"
              value={form.model}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Year*
            <input
              type="number"
              name="year"
              value={form.year}
              onChange={handleChange}
              required
              min="1886"
            />
          </label>

          <label>
            Trim
            <input
              name="trim"
              value={form.trim}
              onChange={handleChange}
            />
          </label>

          <label>
            Color
            <input
              name="color"
              value={form.color}
              onChange={handleChange}
            />
          </label>

          <label>
            Listed Price
            <input
              type="number"
              step="0.01"
              name="price_listed"
              value={form.price_listed}
              onChange={handleChange}
            />
          </label>

          <label>
            Mileage
            <input
              type="number"
              name="milage"
              value={form.milage}
              onChange={handleChange}
            />
          </label>

          <label>
            Days on lot
            <input
              type="number"
              name="days_on_lot"
              value={form.days_on_lot}
              onChange={handleChange}
            />
          </label>

          <label>
            Buyer
            <input
              name="buyer"
              value={form.buyer}
              onChange={handleChange}
            />
          </label>

          <label>
            Sold price
            <input
              type="number"
              step="0.01"
              name="price_sold"
              value={form.price_sold}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="checkboxes">
          <label>
            <input
              type="checkbox"
              name="sale_pending"
              checked={form.sale_pending}
              onChange={handleChange}
            />
            Sale pending
          </label>

        <label>
          <input
            type="checkbox"
            name="sold"
            checked={form.sold}
            onChange={handleChange}
          />
          Sold
        </label>
      </div>

      {error && <p className="error">Error: {error}</p>}
      {message && <p className="success">{message}</p>}

      <button type="submit" disabled={submitting}>
        {submitting ? 'Saving…' : 'Add Car'}
      </button>
    </form>
  </section>
);
}
