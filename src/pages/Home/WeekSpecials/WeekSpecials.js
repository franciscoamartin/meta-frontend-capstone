import { Link } from 'react-router-dom';
import grilledSalmonImage from '../assets/image2.jpg';
import shrimpScampiImage from '../assets/image3.jpg';
import lobsterBisqueImage from '../assets/image4.jpg';
import './WeekSpecials.css';
import pages from '../../../utils/pages';
import MealCard from '../MealCard/MealCard';

const meals = [
  {
    name: 'Grilled Salmon',
    image: grilledSalmonImage,
    price: '$19.99',
    description: `Perfectly grilled salmon fillet served with a side of lemon butter sauce and seasonal vegetables.`,
  },
  {
    name: 'Shrimp Scampi',
    image: shrimpScampiImage,
    price: '$16.99',
    description: `Succulent shrimp sautéed in a garlic, white wine, and butter sauce, served over a bed of linguine.`,
  },
  {
    name: 'Lobster Bisque',
    image: lobsterBisqueImage,
    price: '$14.99',
    description: `A rich and creamy bisque made with fresh lobster, a touch of sherry, and a hint of thyme.`,
  },
  ];
  

const WeekSpecials = () => {
  return (
    <section className="container grid week-specials">
      <div className="week-specials-header">
        <h2>This week specials!</h2>
        <Link className="button-primary" to={pages.get('orderOnline').path}>
          Online Menu
        </Link>
      </div>
      {meals.map((meal, index) => 
        <MealCard key={index} meal={meal} />
      )}
    </section>
  );
};

export default WeekSpecials;
