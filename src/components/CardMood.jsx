import SpotlightCard from "@components/components/SpotlightCard"

const CardMood = ({ title, description, icon }) => {
  return (
        <SpotlightCard className="py-18 flex flex-col justify-center gap-4 text-white border border-[#1f6e4b] relative" >

    {/* <div className="p-5 border border-zinc-500 rounded-2xl aspect-square flex flex-col gap-4"> */}
      <div className="absolute top-6 right-6">
        <i className={`ph ${icon} text-3xl ph-fill text-[#7fce74] opacity-70`}></i>
      </div>
      <div className="space-y-2">
        <h2 className=" text-2xl">{title}</h2>
        <p className="text-sm text-zinc-300/80">{description}</p>
      </div>
    {/* </div> */}
    </SpotlightCard>
  );
};

export default CardMood;

