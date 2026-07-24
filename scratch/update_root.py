import os

def update_root():
    filepath = 'src/routes/__root.tsx'
    with open(filepath, 'r') as f:
        content = f.read()

    mobile_action_bar_code = """
function MobileActionBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden h-[60px] font-medium text-white shadow-[0_-4px_20px_rgba(0,0,0,0.5)]">
      <a href="https://t.me/Sonal_0101" target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center bg-[#0088cc] hover:bg-[#0088cc]/90 transition text-lg tracking-wide">
        Telegram
      </a>
      <a href="https://wa.me/919928561640" target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center bg-[#25D366] hover:bg-[#25D366]/90 transition text-lg tracking-wide">
        WhatsApp
      </a>
    </div>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="pb-[60px] md:pb-0">
        <Outlet />
      </div>
      <MobileActionBar />
    </QueryClientProvider>
  );
}
"""
    # Replace the old RootComponent with the new one
    start_str = "function RootComponent() {"
    start_idx = content.find(start_str)
    
    if start_idx != -1:
        content = content[:start_idx] + mobile_action_bar_code
        with open(filepath, 'w') as f:
            f.write(content)
        print("Updated __root.tsx successfully.")
    else:
        print("Could not find RootComponent.")

if __name__ == "__main__":
    update_root()
