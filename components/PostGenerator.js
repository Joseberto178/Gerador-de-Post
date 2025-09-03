function PostGenerator() {
  try {
    const [selectedCategory, setSelectedCategory] = React.useState('mindset');
    const [generatedPosts, setGeneratedPosts] = React.useState([]);
    const [isGenerating, setIsGenerating] = React.useState(false);

    const categories = [
      { id: 'mindset', name: '🧠 Mindset', icon: 'brain' },
      { id: 'growth', name: '📈 Crescimento', icon: 'trending-up' },
      { id: 'money', name: '💰 Dinheiro', icon: 'dollar-sign' },
      { id: 'motivation', name: '🔥 Motivação', icon: 'zap' },
      { id: 'success', name: '🏆 Sucesso', icon: 'trophy' }
    ];

    const generatePosts = async () => {
      setIsGenerating(true);
      try {
        const templates = getPostTemplates(selectedCategory);
        const randomPosts = templates.sort(() => 0.5 - Math.random()).slice(0, 3);
        setGeneratedPosts(randomPosts);
      } catch (error) {
        console.error('Erro ao gerar posts:', error);
      }
      setIsGenerating(false);
    };

    return (
      <div className="max-w-4xl mx-auto" data-name="post-generator" data-file="components/PostGenerator.js">
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Escolha uma Categoria</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`p-4 rounded-lg border-2 transition-all ${
                  selectedCategory === category.id
                    ? 'border-amber-500 bg-amber-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className={`icon-${category.icon} text-2xl mb-2 ${
                  selectedCategory === category.id ? 'text-amber-500' : 'text-gray-400'
                }`}></div>
                <span className="text-sm font-medium text-gray-700">{category.name}</span>
              </button>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={generatePosts}
              disabled={isGenerating}
              className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isGenerating ? (
                <>
                  <div className="icon-loader-2 text-lg animate-spin inline-block mr-2"></div>
                  Gerando...
                </>
              ) : (
                <>
                  <div className="icon-sparkles text-lg inline-block mr-2"></div>
                  Gerar Posts
                </>
              )}
            </button>
          </div>
        </div>

        {generatedPosts.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {generatedPosts.map((post, index) => (
              <PostCard key={index} post={post} />
            ))}
          </div>
        )}
      </div>
    );
  } catch (error) {
    console.error('PostGenerator component error:', error);
    return null;
  }
}