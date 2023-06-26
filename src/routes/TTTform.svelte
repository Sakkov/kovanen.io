<script>
  // @ts-ignore
  let form;
  // @ts-ignore
  async function handleSubmit(event) {
    event.preventDefault();
    // @ts-ignore
    const data = new FormData(form);

    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      // @ts-ignore
      body: new URLSearchParams(Array.from(data)).toString(),
    })
      .then(() => location.href = "/kiitos")
      .catch((error) => alert(error));
  }
</script>

<form
  id="form-tilaa"
  bind:this={form}
  name="contact"
  data-netlify="true"
  on:submit={handleSubmit}
>
  <input type="hidden" name="form-name" value="contact" />
  <input
    type="text"
    id="domain"
    name="domain"
    placeholder="verkkotunnuksesi"
    required
  />
  <div class="form-helper-note">
    esim. <a href="https://fiksukuljetus.com">fiksukuljetus.com</a>
  </div>
  <input
    type="email"
    id="email"
    name="email"
    placeholder="Sähköposti"
    required
  />

  <input type="submit" value="Tilaa!" name="submit" />
</form>

<style>
</style>
