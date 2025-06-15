// src/components/DashboardCard.tsx

interface DashboardCardProps {
  title: string;
  value: string | number;
  icon: string;
  color: string;
}

const DashboardCard = ({ title, value, icon, color }: DashboardCardProps) => {
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <div className="d-flex align-items-center">
          <div className="flex-grow-1">
            <h5 className="card-title text-muted mb-1">{title}</h5>
            <h2 className="card-text">{value}</h2>
          </div>
          <div className={`fs-1 ${color}`}>
            <i className={icon}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;