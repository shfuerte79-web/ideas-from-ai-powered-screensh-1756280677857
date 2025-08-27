export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-24">
      <h1 className="text-4xl font-bold text-center">
        Ideas from: AI-Powered Screenshot to Text
      </h1>
        <h1 className="text-4xl font-bold text-center mb-8">
          Ideas from: AI-Powered Screenshot to Text
        </h1>
        <p className="text-xl text-center text-gray-600 mb-8">
          ```json
[
  {
    \"title\": \"Smart Note Taker\",
    \"description\": \"أداة SaaS لتحويل لقطات الشاشة إلى نصوص منظمة، مما يسهل على المستخدمين تدوين الملاحظات من المحاضرات أو الاجتماعات.\",
    \"mvp_plan\": \"إنشاء واجهة بسيطة لتحميل لقطات الشاشة، استخدام مكتبة OCR لتحويل الصور إلى نصوص، وتطوير نظام لتنظيم النصوص في ملاحظات قابلة للتعديل.\"
  },
  {
    \"title\": \"Visual Recipe Extractor\",
    \"description\": \"أداة لتحويل لقطات الشاشة من الوصفات إلى نصوص قابلة للاستخدام، مما يسهل على الطهاة تخزين الوصفات وتنظيمها.\",
    \"mvp_plan\": \"تطوير واجهة لتحميل لقطات الشاشة للوصفات، استخدام تقنية OCR لاستخراج النصوص، وإنشاء قاعدة بيانات بسيطة لتخزين الوصفات المستخرجة.\"
  },
  {
    \"title\": \"Screenshot Feedback Collector\",
    \"description\": \"أداة لجمع التعليقات من لقطات الشاشة، حيث يمكن للمستخدمين تحميل لقطات شاشة لمواقع أو تطبيقات والحصول على نصائح أو ملاحظات.\",
    \"mvp_plan\": \"إنشاء واجهة لتحميل لقطات الشاشة، استخدام OCR لاستخراج النصوص، وتطوير نظام بسيط لجمع التعليقات من المستخدمين وتحليلها.\"
  }
]
```
        </p>
        <div className="flex justify-center space-x-4">
          <a 
            href="/auth" 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Get Started
          </a>
          <a 
            href="/dashboard" 
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Dashboard
          </a>
        </div>
      </div>
    </main>
  )
}