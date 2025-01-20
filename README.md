![](icons/icon128.png)
# Dharmatab

**Dharmatab** is a Chrome and Edge extension that transforms your new tab into a peaceful, inspirational space. With motivational quotes inspired by Buddha and Dharmatab combines mindfulness with practicality.

## Features
*  **Inspirational Quotes**: Displays a random motivational quote from Buddha every time you open a new tab.
*  **Custom Backgrounds**: Choose from a selection of serene backgrounds to personalize your experience.
*  **Responsive Design**: Optimized for all screen sizes, providing a seamless user experience.

## Get the Extension
* **[Chrome Web Store](https://chromewebstore.google.com/detail/dharmatab/dpmmnicamfdbhochpmdjmkjbdpbapnkb)** - Download and install Dharmatab directly from the Chrome Web Store.
* **Microsoft Edge Add-ons Store** - Available for Edge users through the Microsoft Edge Add-ons Store.

## Installation (Manual)

If you’d like to load the extension manually (e.g., for development or testing):
1.	Clone or download this repository to your local machine.
2.	Open Chrome or Edge and navigate to the extensions page:
*   Chrome: chrome://extensions/
*   Edge: edge://extensions/
3.	Enable “Developer mode” using the toggle in the top right corner.
4.	Click **“Load unpacked”** and select the directory where the extension is saved.
5.	The extension will now appear in your browser’s extensions list and replace your new tab page.

## File Structure
*   *newtab.html*: The main HTML file for the new tab.
*	*styles.css*: The stylesheet controlling the layout and design of the extension.
*	*background.js*: JavaScript for loading quotes and handling background customization.
*	*quotes.json*: JSON file containing the library of inspirational quotes.
*	*manifest.json*: The extension manifest, defining its functionality and permissions.

How to Use
1.	Install the extension from the **Chrome Web Store** or **Microsoft Edge Add-ons Store**.
2.	Open a new tab to see the extension in action.
3.	Use the search bar at the top for quick Google searches.
4.	Click the **“Backgrounds”** button in the top-right corner to choose a new background.
5.	Enjoy a random motivational quote every time you open a new tab.

## Customization

You can customize the extension by editing the following files:
*	**Backgrounds**: Add your own images in the images directory and reference them in newtab.html.
*	**Quotes**: Add or modify quotes in the quotes.json file.

## License

This extension is open-source and available under the MIT License.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any changes or enhancements.
