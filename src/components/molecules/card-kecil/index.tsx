interface CardKecilProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  icons: any;
  description: string;
}

const CardKecil: React.FC<CardKecilProps> = ({
  title,
  icons,
  description,
  ...props
}) => {
  return (
    <div
      {...props}
      className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-1/4 border "
    >
      <div className="p-6">
        {icons}
        <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          {title}
        </h5>
        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
          {description}
        </p>
      </div>
      <div className="p-6 pt-0">
        <div className="inline-block">
          <button
            className="flex bg-[#273b83] text-white p-3 items-center gap-2 py-2  text-xs  text-center transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-indigo-600 active:bg-gray-900/20"
            type="button"
          >
            Baca selengkapnya
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardKecil;
