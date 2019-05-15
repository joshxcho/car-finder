import React from 'react';

const DetailView = ({ vehicle }) => (
  <div className="container-detail-view">
    <div className="detail-view-list">
      {'Year:'}
      {' '}
      {vehicle.Year}
    </div>
    <div className="detail-view-item">
      {'Model:'}
      {' '}
      {vehicle.Model}
    </div>
    <div className="detail-view-item">
      {'Make:'}
      {' '}
      {vehicle.Make}
    </div>
    <div className="detail-view-item">
      {'Vehicle Country:'}
      {' '}
      {vehicle['Vehicle Country']}
    </div>
    <div className="detail-view-item">
      {'Total Score:'}
      {' '}
      {vehicle['Total Score']}
    </div>
    <div className="detail-view-item">
      {'Daily Score:'}
      {' '}
      {vehicle['Daily Score Total']}
    </div>
    <div className="detail-view-item">
      {'Daily Score:'}
      {' '}
      {vehicle['Daily Score Total']}
    </div>
    <div className="detail-view-item">
      {'Weekend Score:'}
      {' '}
      {vehicle['Weekend Score Total']}
    </div>
    <div className="detail-view-item">
      {'Acceleration:'}
      {' '}
      {vehicle.Acceleration}
    </div>
    <div className="detail-view-item">
      {'Comfort:'}
      {' '}
      {vehicle.Acceleration}
    </div>
    <div className="detail-view-item">
      {'Cool Factor:'}
      {' '}
      {vehicle['Cool Factor']}
    </div>
    <div className="detail-view-item">
      {'Fun Factor:'}
      {' '}
      {vehicle['Fun Factor']}
    </div>
    <div className="detail-view-item">
      {'Features:'}
      {' '}
      {vehicle.Features}
    </div>
    <div className="detail-view-item">
      {'Handling:'}
      {' '}
      {vehicle.Handling}
    </div>
    <div className="detail-view-item">
      {'Practicality:'}
      {' '}
      {vehicle.Practicality}
    </div>
    <div className="detail-view-item">
      {'Quality:'}
      {' '}
      {vehicle.Quality}
    </div>
    <div className="detail-view-item">
      {'Styling:'}
      {' '}
      {vehicle.Styling}
    </div>
    <div className="detail-view-item">
      {'Value:'}
      {' '}
      {vehicle.Value}
    </div>
    <div className="detail-view-item">
      {'Video Link:'}
      {' '}
      {vehicle['Video Link']}
    </div>
    <div className="detail-view-item">
      {'Filmed at:'}
      {' '}
      {vehicle['Filmed At City']}
      {', '}
      {vehicle['Filmed At Country']}
    </div>
  </div>
);

export default DetailView;
