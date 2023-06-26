<script>
  // @ts-ignore
    async function handleSubmit(event) {
        const form = event.target;

        const res = await fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(new FormData(form)).toString()
        });

        if (res.ok) {
            // Redirect to /kiitos if submission is successful
            location.href = '/kiitos';
        } else {
            alert('Form submission failed');
        }
    }
</script>

<form
  id="form-tilaa"
  name="contact"
  method="POST"
  data-netlify-recaptcha="true"
  action="/kiitos"
  data-netlify="true"
  on:submit|preventDefault={handleSubmit}
>
  <input type="hidden" name="TTT-kartoitus" value="contact" />
  <p class="sshh">
    <label>
      Don’t fill this out if you’re human: <input name="bot-field" />
    </label>
  </p>
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
  <!-- 
<div
  class="g-recaptcha"
  data-sitekey="6LetmZ4mAAAAAP9hUNrHQNI9xlT60RivVMbxi_V6"
/>

<div id="recaptchaError" style="color: red; display: none;">
  Please complete the reCAPTCHA
</div> -->

  <input type="submit" value="Tilaa!" name="submit" />
</form>

<style>
</style>
