function DefaultLayout({ children }) {
  return (
    <div className="flex flex-col items-center w-full min-h-screen py-4 bg-blue-50 font-nanum-regular">
      {children}
    </div>
  );
}

export default DefaultLayout;
