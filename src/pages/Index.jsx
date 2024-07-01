function Index() {
  return (
    <div className="text-center">
      <h1 className="text-3xl mb-4">Welcome to Prompt Manager</h1>
      <p className="mb-4">Manage your prompts efficiently and effectively.</p>
      <div className="grid gap-4">
        <div className="p-4 border rounded-lg">
          <h2 className="text-xl mb-2">Quick Links</h2>
          <ul className="list-disc list-inside">
            <li><a href="/prompts" className="text-blue-500 hover:underline">View Prompts</a></li>
            <li><a href="/settings" className="text-blue-500 hover:underline">Settings</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Index;