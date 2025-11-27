import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

/**
 * MarkdownRenderer - Reusable component for rendering markdown content
 * 
 * @param {Object} props
 * @param {string} props.content - Markdown content to render
 * @param {string} props.className - Optional additional CSS classes
 */
function MarkdownRenderer({ content, className = '' }) {
  return (
    <div className={`markdown-content prose dark:prose-invert max-w-none ${className}`}>
      <ReactMarkdown
        rehypePlugins={[rehypeRaw, rehypeSanitize]}
        components={{
          // Headings
          h1: ({ node, ...props }) => (
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 mt-6" {...props} />
          ),
          h2: ({ node, ...props }) => (
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-cyan-300 mb-3 mt-5" {...props} />
          ),
          h3: ({ node, ...props }) => (
            <h3 className="text-xl font-semibold text-gray-800 dark:text-cyan-400 mb-2 mt-4" {...props} />
          ),
          h4: ({ node, ...props }) => (
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2 mt-3" {...props} />
          ),
          
          // Paragraphs
          p: ({ node, ...props }) => (
            <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4" {...props} />
          ),
          
          // Links
          a: ({ node, ...props }) => (
            <a
              className="text-blue-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-300 underline transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
              {...props}
            />
          ),
          
          // Lists
          ul: ({ node, ...props }) => (
            <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700 dark:text-gray-300" {...props} />
          ),
          ol: ({ node, ...props }) => (
            <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-700 dark:text-gray-300" {...props} />
          ),
          li: ({ node, ...props }) => (
            <li className="ml-4" {...props} />
          ),
          
          // Blockquotes
          blockquote: ({ node, ...props }) => (
            <blockquote
              className="border-l-4 border-blue-500 dark:border-cyan-500 pl-4 italic text-gray-600 dark:text-gray-400 my-4 bg-gray-50 dark:bg-gray-800/30 py-2 rounded-r"
              {...props}
            />
          ),
          
          // Inline code
          code: ({ node, inline, className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || '');
            const language = match ? match[1] : '';
            
            return !inline && language ? (
              // Code block with syntax highlighting
              <div className="my-4 rounded-lg overflow-hidden">
                <SyntaxHighlighter
                  style={vscDarkPlus}
                  language={language}
                  PreTag="div"
                  className="text-sm"
                  customStyle={{
                    margin: 0,
                    borderRadius: '0.5rem',
                    padding: '1rem',
                  }}
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              </div>
            ) : (
              // Inline code
              <code
                className="bg-gray-200 dark:bg-gray-800 text-pink-600 dark:text-pink-400 px-1.5 py-0.5 rounded text-sm font-mono"
                {...props}
              >
                {children}
              </code>
            );
          },
          
          // Strong/Bold
          strong: ({ node, ...props }) => (
            <strong className="font-bold text-gray-900 dark:text-white" {...props} />
          ),
          
          // Emphasis/Italic
          em: ({ node, ...props }) => (
            <em className="italic text-gray-800 dark:text-gray-200" {...props} />
          ),
          
          // Horizontal rule
          hr: ({ node, ...props }) => (
            <hr className="my-6 border-gray-300 dark:border-gray-700" {...props} />
          ),
          
          // Tables
          table: ({ node, ...props }) => (
            <div className="overflow-x-auto my-4">
              <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700" {...props} />
            </div>
          ),
          thead: ({ node, ...props }) => (
            <thead className="bg-gray-100 dark:bg-gray-800" {...props} />
          ),
          th: ({ node, ...props }) => (
            <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left font-semibold text-gray-900 dark:text-white" {...props} />
          ),
          td: ({ node, ...props }) => (
            <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-700 dark:text-gray-300" {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

export default MarkdownRenderer;
