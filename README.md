# TXT2HTML Converter

TXT2HTML is a Node.js program designed to convert the content of a text file into a structured HTML article. It's a simple and easy-to-use tool for anyone who wants to automate the process of HTML article creation from plain text files.

## Installation

Follow these steps to install the TXT2HTML Converter on your machine:

1. You need to have [Node.js](https://nodejs.org/) installed on your machine. If you don't have Node.js installed, you can download it from the official website.

2. Open your terminal or command prompt and install the package globally using npm:

```bash
npm i -g git+https://github.com/ShinChven/txt2html.git
```
This command will clone the repository, install all the dependencies specified in its `package.json` file, and then install the package itself globally.

## Usage

To convert a text file to an HTML article, use the following command:

```bash
txt2html <filepath>
```
Replace `<filepath>` with the path of your text file.

Example:

```bash
txt2html ./mytextfile.txt
```
This command will convert `mytextfile.txt` into an HTML article and save the output in the same directory as the input file.

## Contributing

Contributions are welcome! Please feel free to submit a pull request.

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## Support

If you encounter any problems or have suggestions, please open an issue on the GitHub repository.

Enjoy using TXT2HTML Converter!
