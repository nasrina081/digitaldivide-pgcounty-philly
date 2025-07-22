<script>
// testing out a svelte transition
import { fade, fly } from 'svelte/transition'

// keeping track of which sections can be seen on scroll
let sectionSeenOnScroll = {}

// making a section invisible
const reveal = (id) => {
  sectionSeenOnScroll = { ...sectionSeenOnScroll, [id]: true}
}
</script>

