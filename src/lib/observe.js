// this is my scroll observer
// it lets me know when a section comes into view on screen
// i'm using it to trigger animations when people scroll

export default function observe(node, options) {
  // creating the observer that watches the section
  const observer = new IntersectionObserver(
    ([entry]) => {
      // once the section is 40% visible, we’re gonna fire an "enter" event
      if (entry.isIntersecting) {
        node.dispatchEvent(new CustomEvent('enter'))

        // and then we stop watching it — only wanna animate once
        observer.unobserve(node)
      }
    },
    {
      // only trigger when 40% of the section is showing
      threshold: 0.4,

      // if i ever pass in extra options, those go here too
      ...options
    }
  )

  // starting the observation
  observer.observe(node)

  // this is cleanup in case the section gets removed
  return {
    destroy() {
      observer.unobserve(node)
    }
  }
}
