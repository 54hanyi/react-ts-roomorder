import logo_primary from "../../assets/icons/logo_primary.svg";

const LoadingModal = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-30 backdrop-filter backdrop-blur-sm z-50">
      <div className=" p-6 rounded-lg text-center">
        <div className="flex items-center justify-center mb-4 space-x-1">
          <p className="text-h4">載入中</p>
          <div className="animate-bounce text-h4">.</div>
          <div className="animate-bounce text-h4" style={{ animationDelay: '0.2s' }}>.</div>
          <div className="animate-bounce text-h4" style={{ animationDelay: '0.4s' }}>.</div>
        </div>
        <img src={logo_primary} alt="Loading" className="mx-auto mb-4 w-40 h-40" />
      </div>
    </div>
  );
};

export default LoadingModal;
