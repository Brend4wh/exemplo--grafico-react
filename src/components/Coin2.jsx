import { Chart } from 'react-google-charts';

const Coin2 = () => {
  // Dados para o gráfico
  var data = [
    ['Elemento', 'hours', { role: 'style' }],
    ['Mon', 2, '#ddc2f0'],  
    ['Tue', 1, '#ddc2f0'],
    ['Wed', 5, '#ddc2f0'],      
    ['Thu', 3, '#ddc2f0'],
    ['Fri', 7, '#a600ff'],
    ['Sat', 4, '#ddc2f0'],
    ['Sun', 6, '#ddc2f0']
  ];

  return (
    <div style={{ margin: 'auto', width: '100%', textAlign: 'center' }}>
      <Chart
        chartType="ColumnChart" // Altere o tipo de gráfico conforme necessário
        width="100%"
        height="300px"
        data={data}
      />
    </div>
  );
};

export default Coin2;
