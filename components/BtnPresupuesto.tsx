const BtnPresupuesto = ({ text, className }: { text: string; className?: string }) => {
  return (
    <button
      className={`${className} w-[200px] rounded-lg bg-orange-700 p-3 text-white transition-all hover:bg-orange-700`}
    >
      {text}{' '}
    </button>
  )
}

export default BtnPresupuesto
