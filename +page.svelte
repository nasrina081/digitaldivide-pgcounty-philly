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

<style>
  // importig my style sheet
  @import '../styles.css';
</style>

<!-- my hero section, first thing visible to viewers -->
<section class="hero">
  <div class="intro-text">
    <h1 class="gold-text">digital access ≠ digital equity</h1>
    <p class="tagline">a data story by nasrin ali</p>
    <p class="intro-p">
      born in philadelphia. raised in prince george’s county.<br>
      i wanted to understand how access to opportunity and technology differs between these two places i call home.
    </p>
  </div>
</section>

<!-- first scroll-triggered content block -->
<!-- `use:observe` directive activates the animation when section scrolls into view -->
<section class="scroll-block" use:observe on:enter={() => reveal('story-1')}>
  {#if sectionSeenOnScroll['story-1']}
    <div transition:fade>
      <h2 class="section-heading">what is the digital divide?</h2>
      <p>
        the digital divide is about more than just internet—it’s about access to opportunity. in schools, jobs, and even healthcare, digital access is a gateway.
      </p>
      <p>
        but not everyone has that gateway. in america, access often comes down to where you live, how much you make, and what resources your community has—or doesn’t.
      </p>
    </div>
  {/if}
</section>
