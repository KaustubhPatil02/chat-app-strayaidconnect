'use client';
import EmptyState from "../components/EmptyState";

const MyComponent: React.FC = () => {

  return (
    <div className="hidden lg:block lg:pl-80 h-full">
      <EmptyState />
    </div>
  );
};

export default MyComponent;
