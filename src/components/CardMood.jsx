import SpotlightCard from "@components/components/SpotlightCard"

const CardMood = ({ title, description, icon }) => {
  return (
    <SpotlightCard className="py-18 flex flex-col justify-center gap-4 bg-card text-card-foreground border border-border relative">
      {/* <div className="p-5 border border-zinc-500 rounded-2xl aspect-square flex flex-col gap-4"> */}
      <div className="space-y-2">
        <div>
          <i
            className={`ph ${icon} text-3xl ph-fill text-accent-foreground`}
          ></i>
          <h2 className=" text-2xl font-semibold">{title}</h2>
        </div>
        <p className="text-sm text-card-foreground">{description}</p>
      </div>
      {/* </div> */}
    </SpotlightCard>
  )
}

export default CardMood
