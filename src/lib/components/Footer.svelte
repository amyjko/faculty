<script>
    // @ts-nocheck

    import External from './External.svelte';
</script>

<div>
    <hr />
    <small>
        <p
            xmlns:dct="https://purl.org/dc/terms/"
            xmlns:vcard="https://www.w3.org/2001/vcard-rdf/3.0#"
        >
            <a
                rel="license"
                href="https://creativecommons.org/publicdomain/zero/1.0/"
            >
                <img
                    src="https://i.creativecommons.org/p/zero/1.0/88x31.png"
                    style="border-style: none;"
                    alt="CC0"
                />
            </a>
            To the extent possible under law,
            <a rel="dct:publisher" href="https://faculty.washington.edu/ajko">
                <span property="dct:title">Amy J. Ko</span></a
            >
            has waived all copyright and related or neighboring rights to the design
            and implementation of
            <span property="dct:title">Amy's faculty site</span>. This work is
            published from the
            <span
                property="vcard:Country"
                datatype="dct:ISO3166"
                content="US"
                about="https://faculty.washington.edu/ajko"
            >
                United States</span
            >. See <External to="https://github.com/amyjko/faculty"
                >this site's GitHub repository</External
            > to view source and provide feedback.
        </p>
    </small>
</div>

<style>
    img {
        height: 1em;
    }
</style>
