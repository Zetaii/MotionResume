import { motion } from "framer-motion"

const Tile = () => {
  return (
    <motion.div
      whileHover={{
        zIndex: 1,
        backgroundColor: "#FFFFFF",
      }}
      transition={{
        duration: 1,
        ease: "easeOut",
      }}
      className="aspect-square bg-black border-neutral-900"
    />
  )
}
export default Tile
