import './App.scss';
import data from './data.json';

const App = () => {
  let copyData = [...data];
  const sortedData = copyData.sort((a, b) => b.amount - a.amount);
  console.log(sortedData);
  const heightCalculator = (el) => {
    let height = (el.amount / sortedData[0].amount) * 100;
    if (height < 10) height = 10; //to prevent bar from being excessively small
    if (el.day === sortedData[0].day) {
      return { height: `${height}%`, backgroundColor: 'rgb(118, 181, 188)' };
    } else return { height: `${height}%` };
  };

  return (
    <>
      <div className="app">
        <div className="background">
          <div className="chartContainer">
            <div className="chartHeader">
              <div className="headerInfo">
                My balance
                <h3>$921.48</h3>
              </div>
              <div className="headerIcon">
                <svg width="72" height="48" viewBox="0 0 72 48" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" fillRule="evenodd">
                    <circle fill="#382314" cx="48" cy="24" r="24" />
                    <circle stroke="#FFF" strokeWidth="2" cx="24" cy="24" r="23" />
                  </g>
                </svg>
              </div>
            </div>
            <div className="chartContent">
              <div className="barChartContainer">
                <div className="barChartHeader">Spending - Last 7 days</div>
                <div className="barChart">
                  {data.map((el) => (
                    <>
                      <div className="day" key={el.day}>
                        <div
                          className="bar"
                          style={heightCalculator(el)}
                          data-content={`$${el.amount}`}></div>
                        <div>{el.day}</div>
                      </div>
                    </>
                  ))}
                </div>
              </div>
              <div className="chartInfo">
                <div className="monthSpending">
                  <div>Total this month</div>
                  <h3>$13.37</h3>
                </div>
                <div className="monthPercent">
                  <div>
                    <b>+2.4%</b>
                    <div> from last month</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
