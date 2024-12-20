const MainLayout = ({ children }) => {
  return (
    <section className="m-auto w-full h-full flex flex-col justify-center items-center max-w-xl min-h-screen bg-gray-100/90 relative overflow-x-hidden py-20 px-4">
      {children}
    </section>
  );
};

export default MainLayout;
