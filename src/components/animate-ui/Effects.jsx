import { Children, isValidElement } from "react"
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react"

const viewport = { once: false, margin: "0px 0px -80px 0px" }
const entranceSpring = { type: "spring", stiffness: 120, damping: 22, mass: 0.95 }
const interactionSpring = { type: "spring", stiffness: 180, damping: 20, mass: 0.75 }

export function Fade({
  children,
  className,
  delay = 0,
  initialOpacity = 0,
  opacity = 1,
  inView = true,
  ...props
}) {
  const reduceMotion = useReducedMotion()
  const animation = reduceMotion
    ? { opacity }
    : { opacity, filter: "blur(0px)" }
  const initial = reduceMotion
    ? { opacity }
    : { opacity: initialOpacity, filter: "blur(10px)" }

  return (
    <motion.div
      className={className}
      initial={initial}
      animate={!inView ? animation : undefined}
      whileInView={inView ? animation : undefined}
      viewport={inView ? viewport : undefined}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function Fades({
  children,
  className,
  holdDelay = 0,
  delayStep = 0.14,
  ...props
}) {
  return (
    <div className={className}>
      {Children.map(children, (child, index) => {
        if (!isValidElement(child)) return child

        return (
          <Fade delay={holdDelay + index * delayStep} {...props}>
            {child}
          </Fade>
        )
      })}
    </div>
  )
}

export function Slide({
  children,
  className,
  delay = 0,
  direction = "up",
  offset = 32,
  inView = true,
  ...props
}) {
  const reduceMotion = useReducedMotion()
  const axis = direction === "left" || direction === "right" ? "x" : "y"
  const sign = direction === "left" || direction === "up" ? 1 : -1
  const initial = reduceMotion ? { opacity: 1 } : { opacity: 0, [axis]: offset * sign }
  const animation = reduceMotion ? { opacity: 1 } : { opacity: 1, [axis]: 0 }

  return (
    <motion.div
      className={className}
      initial={initial}
      animate={!inView ? animation : undefined}
      whileInView={inView ? animation : undefined}
      viewport={inView ? viewport : undefined}
      transition={{ ...entranceSpring, delay }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function Slides({
  children,
  className,
  holdDelay = 0,
  delayStep = 0.16,
  ...props
}) {
  return (
    <div className={className}>
      {Children.map(children, (child, index) => {
        if (!isValidElement(child)) return child

        return (
          <Slide delay={holdDelay + index * delayStep} {...props}>
            {child}
          </Slide>
        )
      })}
    </div>
  )
}

export function Magnetic({ children, className }) {
  const reduceMotion = useReducedMotion()
  const x = useSpring(useMotionValue(0), interactionSpring)
  const y = useSpring(useMotionValue(0), interactionSpring)

  const handlePointerMove = (event) => {
    if (reduceMotion) return

    const bounds = event.currentTarget.getBoundingClientRect()
    x.set((event.clientX - bounds.left - bounds.width / 2) * 0.18)
    y.set((event.clientY - bounds.top - bounds.height / 2) * 0.18)
  }

  const handlePointerLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      className={className}
      style={{ x, y }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {children}
    </motion.div>
  )
}

export function Tilt({ children, className }) {
  const reduceMotion = useReducedMotion()
  const rotateXValue = useMotionValue(0)
  const rotateYValue = useMotionValue(0)
  const rotateX = useSpring(rotateXValue, interactionSpring)
  const rotateY = useSpring(rotateYValue, interactionSpring)

  const handlePointerMove = (event) => {
    if (reduceMotion) return

    const bounds = event.currentTarget.getBoundingClientRect()
    const px = (event.clientX - bounds.left) / bounds.width - 0.5
    const py = (event.clientY - bounds.top) / bounds.height - 0.5

    rotateXValue.set(py * -7)
    rotateYValue.set(px * 7)
  }

  const handlePointerLeave = () => {
    rotateXValue.set(0)
    rotateYValue.set(0)
  }

  return (
    <motion.div
      className={className}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      whileHover={reduceMotion ? undefined : { scale: 1.015 }}
      transition={interactionSpring}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {children}
    </motion.div>
  )
}
