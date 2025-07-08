interface CodeSnippetProps {
  skill: string;
  code: string;
}

const CodeSnippet = ({ skill, code }: CodeSnippetProps) => {
  return (
    <div className="absolute z-10 left-0 right-0 top-full mt-2 bg-code-bg border border-code-border rounded-lg overflow-hidden shadow-lg">
      <div className="flex items-center gap-2 bg-muted/20 px-3 py-2 text-xs text-white/60 border-b border-code-border">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <span className="flex-1 text-center">VSCode - {skill}</span>
      </div>
      <div className="p-3">
        <pre className="text-xs text-accent font-mono whitespace-pre-wrap overflow-x-auto">
          {code}
        </pre>
      </div>
    </div>
  );
};

export default CodeSnippet;