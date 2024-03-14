import sys
import os
from find_keywords import keywords
from generate_text import generate_text
from convert_to_html import convert_to_html
from get_title import get_title
import random
from math import ceil


def main():

    # Number of keywords for the text generation
    n = 5

    # Get parameters from the terminal
    try:
        website = sys.argv[1]
        # If https:// is not in the website, add it
        if "https://" not in website:
            website = "https://" + website

        keywords_file = sys.argv[2]

        output_file = sys.argv[3]
    except:
        print(
            """The correct usage is: python main.py <your_website_url> <keywords in a csv file or "find" to automatically find keywords> <output_file>"""
        )
        exit()

    # Get the keywords
    selected_keywords = []
    competing_keywords = []
    if keywords_file != "find" and not os.path.isfile(keywords_file):
        print("The keywords file does not exist.")
        exit()
    elif keywords_file == "find":
        selected_keywords, competing_keywords = keywords(website)

        # Randomly select ceil(n*.2) keywords from the selected keywords list
        main_keywords = random.sample(selected_keywords, ceil(n * 0.2))
        selected_keywords = main_keywords


        # Randomly select additional n - ceil(n*.2) keywords from the competing keyword list
        for _ in range(n - len(main_keywords)):
            r = random.randint(0, len(competing_keywords) - 1)
            selected_keywords.append(competing_keywords[r])
    else:
        with open(keywords_file, "r", encoding="UTF-8") as file:
            selected_keywords = file.read().split(",")
            selected_keywords = [keyword for keyword in selected_keywords if keyword != ""]
            # Remove duplicates
            selected_keywords = list(set(selected_keywords))
            # Randomly select n keywords from the keyword lists
            selected_keywords = random.sample(selected_keywords, n)

    print("Selected keywords:")
    print(selected_keywords)

    # Generate the text using the selected keywords
    generated_text = generate_text(selected_keywords)
    print("Generated text:")
    print(generated_text.strip()[:100] + "...")

    # If output file ends in .html, convert the text to HTML
    if output_file.endswith(".html") or output_file == "auto_svelte.kit":
        print("Converting the text to HTML...")
        generated_text = convert_to_html(generated_text)
        print("Text converted to HTML.")

    if output_file == "auto_svelte.kit":
        page_name = get_title(generated_text)
        output_file = f"{page_name}/+page.svelte"
        os.makedirs(page_name, exist_ok=True)

    # Write the text to the output file
    with open(output_file, "w", encoding="UTF-8") as file:
        file.write(generated_text)

    pass


if __name__ == "__main__":
    main()
