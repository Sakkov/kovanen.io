<!-- Display all the articles -->
<script>
    // @ts-ignore
    import { articles } from "$lib/articles";
</script>

<h1>Articles</h1>

{#each articles as article}
    <hr>
    <div class="content">
        <div class="block">
            <h3>
                {article.title}
            </h3>
            {#if article.date}
                <span>{article.date}</span>
            {/if}
            <p>{@html article.firstParagraph}</p>
            <a href="/articles/{article.route}">Lue lisää!</a>
        </div>
    </div>
{/each}

