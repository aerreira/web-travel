from playwright.sync_api import sync_playwright

def verify_images():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.goto("file:///home/jules/start/index.html") # Assuming index.html is in the root

        # Check active carousel image
        active_img = page.locator(".carousel-item.active img").first
        loading_attr = active_img.get_attribute("loading")
        fetchpriority_attr = active_img.get_attribute("fetchpriority")

        print(f"Active Image - loading: {loading_attr}, fetchpriority: {fetchpriority_attr}")

        # Check inactive carousel images
        inactive_imgs = page.locator(".carousel-item:not(.active) img").all()
        for i, img in enumerate(inactive_imgs):
            loading_attr = img.get_attribute("loading")
            print(f"Inactive Image {i+1} - loading: {loading_attr}")

        browser.close()

if __name__ == "__main__":
    verify_images()
