import './statistic.scss';

const Statistic = () => {

  return (
    <div className='statistic'>
      <div className="statistic-item">
        <div className="statistic-item-counter">98</div>
        <div className="statistic-item-text">Countries Visited</div>
      </div>
      <div className="statistic-item">
        <div className="statistic-item-counter">7</div>
        <div className="statistic-item-text">Continents Visited</div>
      </div>
      <div className="statistic-item">
        <div className="statistic-item-counter">8</div>
        <div className="statistic-item-text">Torn Pairs of Shoes</div>
      </div>
      <div className="statistic-item">
        <div className="statistic-item-counter">2</div>
        <div className="statistic-item-text">Lost Backpacks</div>
      </div>
    </div>
  )
};

export default Statistic;