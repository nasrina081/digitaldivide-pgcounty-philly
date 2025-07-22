<script lang="ts">
  /* importing svelte transitions */
  import { fade, fly } from 'svelte/transition'

  /* custom action that watches when a section comes into view */
  import observe from '$lib/observe'

  /* keeping track of which sections have been revealed on scroll */
  let sectionSeenOnScroll = {}

  /* reveal a section once it's scrolled into view */
  const reveal = (id) => {
    sectionSeenOnScroll = { ...sectionSeenOnScroll, [id]: true }
  }
</script>

<style>
  /* importing my stylesheet */
  @import '../style.css';
</style>

<!-- ✨ hero / intro section -->
<section class="hero">
  <div class="intro-text">
    <h1 class="gold-text">digital access ≠ digital equity</h1>
    <p class="tagline">a data story by nasrin ali</p>
    <p class="intro-p">
      born in philadelphia. raised in prince george’s county.<br>
      my family always had solid internet—but i knew that wasn’t the case for everyone. this story is about those differences.
    </p>
  </div>
</section>

<!-- 🔍 intro to the problem -->
<section class="scroll-block" use:observe on:enter={() => reveal('intro')}>
  {#if sectionSeenOnScroll['intro']}
    <div transition:fade>
      <h2 class="section-heading">what is the digital divide?</h2>
      <p>
        the digital divide isn’t just about having wi-fi. it’s about the access that connection brings: to education, jobs, opportunity, and more.
      </p>
      <p>
        in cities like philly, and suburbs like pg county, the gap in digital access can shape futures—and it’s not always where you’d expect.
      </p>
    </div>
  {/if}
</section>

<!-- philly broadband data -->
<section class="scroll-block" use:observe on:enter={() => reveal('philly')}>
  {#if sectionSeenOnScroll['philly']}
    <div transition:fly={{ y: 50 }}>
      <h2 class="section-heading">philadelphia: progress, but uneven</h2>
      <p>
        according to the city’s 2021 internet assessment survey:
      </p>
      <ul>
        <li>84% of philly households had high-speed internet (up from 70% in 2019)</li>
        <li>only 75% had a working desktop or laptop</li>
        <li>affordability was the #1 barrier—56% said monthly cost was the reason they didn’t have service</li>
      </ul>
      <p>
        even in a major city, access isn’t guaranteed. nearly 1 in 3 residents hadn’t even heard of discount internet programs.
      </p>

      <!-- embedded chart from philly article or Tableau -->
      <iframe
        title="Philly Broadband Chart"
        src="https://public.tableau.com/views/BWDC-EducationEmployment-InternetSubscriptions/MapInternetSubscriptions?:language=en-US&:embed=true"
        width="100%" height="480" style="border:none;"></iframe>
    </div>
  {/if}
</section>

<!-- pg county broadband data -->
<section class="scroll-block" use:observe on:enter={() => reveal('pg')}>
  {#if sectionSeenOnScroll['pg']}
    <div transition:fade>
      <h2 class="section-heading">prince george’s county: high connection, but still gaps</h2>
      <p>
        pg county ranks high in broadband adoption, especially among black households—but education and income still matter.
      </p>
      <p>
        from the BWDC data:
      </p>
      <ul>
        <li> ~93% of black households in pg county have broadband internet</li>
        <li> 32.7% of black residents hold a bachelor’s degree or higher</li>
        <li> median black household income: $83,706</li>
      </ul>

      <!-- embedded chart: education or income by race -->
      <iframe
        title="Median Income Chart"
        src="https://public.tableau.com/shared/W46X6THDH?:embed=true"
        width="100%" height="480" style="border:none;"></iframe>
    </div>
  {/if}
</section>

<!-- visual comparison or quote -->
<section class="scroll-block" use:observe on:enter={() => reveal('quote')}>
  {#if sectionSeenOnScroll['quote']}
    <div transition:fly={{ x: -40 }}>
      <blockquote class="quote-block">
        “access doesn’t just mean a signal. it means stability. it means speed. and it means knowing where to get help if you lose it.”
        <br>– nasrin ali
      </blockquote>

      <!-- image placeholder -->
    </div>
  {/if}
</section>

<!-- closing section -->
<section class="scroll-block" use:observe on:enter={() => reveal('closing')}>
  {#if sectionSeenOnScroll['closing']}
    <div transition:fade>
      <h2 class="section-heading">so what does this mean?</h2>
      <p>
        both places—pg and philly—have made gains in broadband access. but education, income, and program awareness still shape who’s fully connected.
      </p>
      <p>
        digital equity means more than just internet. it means support, speed, awareness, and reliability. it means opportunity that doesn’t depend on your zip code.
      </p>
      <p>
        this story is just one glimpse—told from two communities that shaped me.
      </p>
    </div>
  {/if}
</section>

<footer class="sources">
  <h3>sources</h3>
  <ul>
    <li><a href="https://www.phila.gov/2021-10-20-understanding-the-digital-divide-philadelphias-report-on-digital-access/" target="_blank">Philadelphia Digital Divide Report (2021)</a></li>
    <li><a href="https://public.tableau.com/shared/W46X6THDH?:embed=true" target="_blank">BWDC: Median Income</a></li>
    <li><a href="https://public.tableau.com/shared/KDWT4JJC5?:embed=true" target="_blank">BWDC: Educational Attainment</a></li>
    <li><a href="https://public.tableau.com/views/BWDC-EducationEmployment-InternetSubscriptions/MapInternetSubscriptions" target="_blank">BWDC: Broadband Subscriptions</a></li>
  </ul>
</footer>
