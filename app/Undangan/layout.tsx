import SidebarWisuda from "@/component/BottonNav"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">

      <SidebarWisuda />

      <main className="flex-1 ml-64 p-6">
        {children}
      </main>

    </div>
  )
}