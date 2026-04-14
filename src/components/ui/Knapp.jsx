// src/components/ui/Knapp.jsx
// Gjenbrukbar knapp med varianter
// Brukes på tvers av hele appen

const variantKlasser = {
    primaer:  "bg-nf-mork text-white hover:bg-[#243d5a]",
    aksent:   "bg-nf-aksent text-nf-mork hover:bg-[#d4901a]",
    skissert: "border-2 border-nf-mork text-nf-mork hover:bg-nf-mork hover:text-white",
  };
  
  function Knapp({ children, variant = "primaer", type = "button", disabled = false, onClick }) {
    return (
      <button
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={`
          inline-flex items-center justify-center
          px-5 py-2 rounded-lg font-semibold text-sm
          transition-colors duration-150
          disabled:opacity-50 disabled:cursor-not-allowed
          ${variantKlasser[variant]}
        `}
      >
        {children}
      </button>
    );
  }
  
  export default Knapp;