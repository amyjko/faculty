<script lang="ts">
    import Block from '$lib/components/Block.svelte';
    import Image from '$lib/components/Thumbnail.svelte';
</script>

<h1>
    These are communities I work with to do research, advocate, and have impact.
</h1>

<Block link="http://computinged.uw.edu/" header="ComputingEd@UW">
    <Image
        slot="image"
        url={'/images/communities/computinged.jpg'}
        alt="The ComputingEd@UW logo."
    />
    &nbsp;is the grassroots community of computing education researchers and educators
    at the University of Washington, spanning the Paul G. Allen School of Computer
    Science & Engineering, The Information School, the College of Education, Human-Centered
    Design and Engineering, and the Department of Communication.
</Block>

<Block link="http://dub.uw.edu/" header="DUB">
    <Image
        slot="image"
        url={'/images/communities/dub.jpg'}
        alt="The DUB logo."
    />
    &nbsp;is the grassroots community of HCI and design researchers and educators
    + teachers at the University of Washington. Amy helped grow it from a small group
    of HCI faculty to one of the largest and most prolific HCI research communities
    in the world.
</Block>

<Block link="http://uwplse.org" header="PLSE">
    <Image
        slot="image"
        url={'/images/communities/plse.jpg'}
        alt="The PLSE logo."
    />
    &nbsp;is the programming languages + software engineering researcher group in
    the Paul G. Allen School of Computer Science & Engineering at the University
    of Washington. Amy often advises or co-advises Ph.D. students in PLSE.
</Block>

<Block
    link="https://digitalyouth.ischool.uw.edu"
    header="The Digital Youth Lab"
>
    <Image
        slot="image"
        url={'/images/communities/digitalyouth.jpg'}
        alt="The Digital Youth logo."
    />
    &nbsp;studies the transformative potential of technology in young people's lives.
    I collaborate with faculty in the lab.
</Block>

<Block link="http://soundcsed.org/" header="Sound CS Ed">
    <Image
        slot="image"
        url={'/images/communities/soundcsed.jpg'}
        alt="The Sound CS Ed logo."
    />
    &nbsp;is a community of CS teachers, researchers, makers, and advocates in Puget
    Sound that I facilitate. It hosts a quarterly meetup and chats on Slack.
</Block>

<Block link="https://www.csforallwa.org" header="CS for All Washington">
    <Image
        slot="image"
        url={'/images/communities/csforallwa.jpg'}
        alt="The CS for All Washington logo."
    />
    . I founded this coalition to advocate for universal K-12 CS education in Washington
    state, bringing together CSTA chapters, the Washington State Office of the Superintendent
    of Public Instruction, and several Educational Service Districts.
</Block>

<Block
    link="https://www.washington.edu/accesscomputing/"
    header="AccessComputing"
>
    <Image
        slot="image"
        url={'/images/communities/accesscomputing.jpg'}
        alt="The AccessComputing logo."
    />
    . First funded by NSF and led by Richard Ladner and Sheryl Burgstahler, AccessComputing
    creates pathways for students with disabilities into computing. I joined as a
    co-PI in 2016, and brought leadership in teaching accessibility. I help make
    strategic decision for the project and give talks regularly about the alliance's
    activities.
</Block>

<Block link="https://create.uw.edu" header="CREATE">
    <Image
        slot="image"
        url={'/images/communities/create.png'}
        alt="The CREATE center logo."
    />
    . The Center for Research and Education on Accessible Technology and Experiences
    explores how to make technology and the world accessible. My work in the center
    explores how to educate students and teachers about accessible computing, to
    ensure future generations of technologists create a more accessible digital world.
</Block>

<Block link="http://www.eusesconsortium.org" header="EUSES Consortium">
    <Image
        slot="image"
        url={'/images/communities/euses.jpg'}
        alt="The EUSES Washington logo."
    />
    &nbsp;is a former coalition of end-user programming and end-user software engineering
    researchers. I was its last director.
</Block>
