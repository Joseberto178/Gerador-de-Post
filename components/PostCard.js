function PostCard({ post }) {
  try {
    const [copied, setCopied] = React.useState(false);

    const copyToClipboard = async () => {
      try {
        await navigator.clipboard.writeText(post.text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (error) {
        console.error('Erro ao copiar:', error);
      }
    };

    return (
      <div className="post-card" data-name="post-card" data-file="components/PostCard.js">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${post.gradient} flex items-center justify-center`}>
              <div className={`icon-${post.icon} text-white text-lg`}></div>
            </div>
            <span className="ml-3 font-medium text-gray-700">{post.category}</span>
          </div>
          <button
            onClick={copyToClipboard}
            className={`p-2 rounded-lg transition-colors ${
              copied 
                ? 'bg-green-100 text-green-600' 
                : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
            }`}
          >
            <div className={`icon-${copied ? 'check' : 'copy'} text-lg`}></div>
          </button>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <pre className="whitespace-pre-wrap text-sm text-gray-800 font-medium leading-relaxed">
            {post.text}
          </pre>
        </div>

        <div className="flex flex-wrap gap-2">
          {post.hashtags.map((tag, index) => (
            <span key={index} className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error('PostCard component error:', error);
    return null;
  }
}