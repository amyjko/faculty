<script lang="ts">
    import External from '$lib/components/External.svelte';
    import Block from '$lib/components/Block.svelte';
    import { profile } from '$lib/models/stores';
    import { parseDate } from '$lib/models/Profile';
    import Image from '$lib/components/Thumbnail.svelte';
    import Link from '$lib/components/Link.svelte';
</script>

<h1> My students and I receive funding from many sources. </h1>

<Block link="https://ischool.uw.edu" header="The Information School">
    <Image
        slot="image"
        url={'/images/funding/ischool.jpg'}
        alt="The Information School logo"
    />
    &mdash; My lab's primary source of funding is the University of Washington Information
    School. It pays 9 months of my salary, it subsidizes my doctoral students' time
    through teaching assistantships, it provides space and staff support, and it
    provides my core intellectual community. The iSchool's resources come from tuition,
    fees, taxes from the Washington state government, and philanthropic giving.
</Block>

<Block link="https://nsf.gov" header="National Science Foundation">
    <Image slot="image" url={'/images/funding/nsf.jpg'} alt="The NSF logo." />
    &mdash; The majority of my sponsored research is funded by the U.S. National
    Science Foundation, which is tax-funded. I write proposals, which are confidentially
    evaluated by my peers, and when my peers and NSF find my proposals to have compelling
    intellectual merit and potential for broader impact, I receive grants. I use
    these grants to support my summer salary, my doctoral students stipends, benefits,
    and tuition, my lab's research expenses, hourly undergraduate research assistants,
    and our travel. My doctoral students also write their own proposals, often winning
    NSF graduate research fellowships to support the first 3 years of their doctoral
    work. My NSF awards include:
    <ul>
        {#each $profile.getFunding( (funding) => funding.funder === 'National Science Foundation' && !funding.private, (funding) => (funding.commitment.end === null ? -Infinity : -parseDate(funding.commitment.end).getFullYear()) ) as award}
            <li>
                {#if award.url}
                    <External to={award.url}>{award.title}</External>
                {:else}
                    {award.title}
                {/if}
            </li>
        {/each}
    </ul>
    Six of my 13 past and present doctoral students have also won NSF Graduate Research
    Fellowships, which support three years of their research.

    <br />
    <br />
    For those preparing CAREER proposals looking for a exemplars, here is my <Link
        to={'/papers/Ko2009CAREER.pdf'}>awarded proposal</Link
    >.
</Block>
<Block link="https://microsoft.com" header="Microsoft">
    <Image
        slot="image"
        url={'/images/funding/microsoft.jpg'}
        alt="The Microsoft logo."
    />
    &mdash; Occasionally, collaborators across Microsoft, such as those in Microsoft
    Research and Microsoft's developer division, will give me unrestricted gifts
    to support my lab. These are no strings attached contributions, which I rely
    on for expenses that the iSchool and NSF will not support, such as buying out
    of teaching to free up research time and unplanned research expenses.
</Block>

<Block link="https://google.com" header="Google">
    <Image
        slot="image"
        url={'/images/funding/google.jpg'}
        alt="The Google logo."
    />
    &mdash; In the past, I have received unrestricted Google research grants that
    generally support 1-year projects that support me and a doctoral student.
</Block>

<Block link="http://adobe.com" header="Adobe">
    <Image
        slot="image"
        url={'/images/funding/adobe.jpg'}
        alt="The Adobe logo."
    />
    &mdash; When my doctoral students or I have collaborated with Adobe researchers,
    they have given unrestricted gifts in support of my lab. This funding comes with
    no strings attached.
</Block>
