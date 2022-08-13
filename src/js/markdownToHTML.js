const rules = [
    // Header
    [/#{6}\s?([^\n]+)/g, "<h6>$1</h6>"],
    [/#{5}\s?([^\n]+)/g, "<h5>$1</h5>"],
    [/#{4}\s?([^\n]+)/g, "<h4>$1</h4>"],
    [/#{3}\s?([^\n]+)/g, "<h3>$1</h3>"],
    [/#{2}\s?([^\n]+)/g, "<h2>$1</h2>"],
    [/#{1}\s?([^\n]+)/g, "<h1>$1</h1>"],

    // Bold, Italics and Paragragh
    [/\*\*\s?([^\n]+)\*\*/g, "<b>$1</b>"],
    [/\*\s?([^\n]+)\*/g, "<i>$1</i>"],
    [/__([^_]+)__/g, "<b>$1</b>"],
    [/_([^_`]+)_/g, "<i>$1</i>"],
    [/([^\n]+\n?)/g, "<p>$1</p>"],

    // Links
    [
        /\[([^\]]+)\]\(([^)]+)\)/g,
        '<a href="$2>$1</a>',
    ],

    // Highlights
    [
        /(`)(\s?[^\n,]+\s?)(`)/g,
        '<mark>$2</mark>',
    ],

    // Lists
    [/([^\n]+)(\+)([^\n]+)/g, "<ul><li>$3</li></ul>"],
    [/([^\n]+)(\*)([^\n]+)/g, "<ul><li>$3</li></ul>"],

    // Image
    [
        /!\[([^\]]+)\]\(([^)]+)\s"([^")]+)"\)/g,
        '<img src="$2" alt="$1" title="$3" />',
    ],
];

export function parseMarkdown(markdownText) {
    rules.forEach(([rule, template]) => {
        markdownText = markdownText.replace(rule, template)
    })
    return markdownText.trim()
}