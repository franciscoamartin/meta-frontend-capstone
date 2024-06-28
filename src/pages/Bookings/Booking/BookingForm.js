import { useState } from 'react';
import FormField from '../utils/FormField';

const BookingForm = ({ availableTimes, dispatchOnDateChange, submitData }) => {
  const minDate = new Date().toISOString().split('T')[0];
  const defaultTime = availableTimes[0];
  const minGuests = 1;
  const maxGuests = 10;
  const occasions = ['Birthday', 'Anniversary'];
  
  const errorMessages = {
    date: 'Please choose a valid date',
    time: 'Please choose a valid time',
    occasion: 'Please choose a valid occasion',
    guests: 'Please enter a number between 1 and 10'
  };

  const [date, setDate] = useState(minDate);
  const [time, setTime] = useState(defaultTime);
  const [guests, setGuests] = useState(minGuests);
  const [occasion, setOccasion] = useState(occasions[0]);

  const isFieldValid = (field) => field !== '';

  const isFormValid = () => (
    isFieldValid(date) &&
    isFieldValid(time) &&
    isFieldValid(guests) &&
    isFieldValid(occasion)
  );

  const handleDateChange = (e) => {
    setDate(e.target.value);
    dispatchOnDateChange(e.target.value);
  };

  const handleTimeChange = (e) => setTime(e.target.value);
  const handleGuestsChange = (e) => setGuests(e.target.value);
  const handleOccasionChange = (e) => setOccasion(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      submitData({ date, time, guests, occasion });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormField 
        label="Date" 
        htmlFor="date" 
        hasError={!isFieldValid(date)} 
        errorMessage={errorMessages.date}
      >
        <input 
          type="date" 
          id="date" 
          name="date" 
          min={minDate} 
          value={date} 
          required 
          onChange={handleDateChange}
        />
      </FormField>
      <FormField 
        label="Time" 
        htmlFor="time" 
        hasError={!isFieldValid(time)} 
        errorMessage={errorMessages.time}
      >
        <select 
          id="time" 
          name="time" 
          value={time} 
          required 
          onChange={handleTimeChange}
        >
          {availableTimes.map((timeOption) => (
            <option data-testid="time-option" key={timeOption}>
              {timeOption}
            </option>
          ))}
        </select>
      </FormField>
      <FormField 
        label="Number of Guests" 
        htmlFor="guests" 
        hasError={!isFieldValid(guests)} 
        errorMessage={errorMessages.guests}
      >
        <input 
          type="number" 
          id="guests" 
          name="guests" 
          value={guests} 
          min={minGuests} 
          max={maxGuests} 
          required 
          onChange={handleGuestsChange}
        />
      </FormField>
      <FormField 
        label="Occasion" 
        htmlFor="occasion" 
        hasError={!isFieldValid(occasion)} 
        errorMessage={errorMessages.occasion}
      >
        <select 
          id="occasion" 
          name="occasion" 
          value={occasion} 
          required 
          onChange={handleOccasionChange}
        >
          {occasions.map((occasionOption) => (
            <option data-testid="occasion-option" key={occasionOption}>
              {occasionOption}
            </option>
          ))}
        </select>
      </FormField>
      <button 
        className="button-primary" 
        type="submit" 
        disabled={!isFormValid()}
      >
        Make your reservation
      </button>
    </form>
  );
};

export default BookingForm;
