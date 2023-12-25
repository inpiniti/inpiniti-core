<template>
  <div class="flex flex-col gap-4 lg:h-screen w-full">
    <header>
      <slot name="header" />
    </header>
    <nav>
      <slot name="nav" />
    </nav>
    <div class="flex lg:flex-row flex-col w-full gap-4 grow-[1]">
      <div class="flex flex-col gap-4 grow-[1]">
        <section class="shrink-0">
          <slot name="section" />
        </section>
        <articel class="grow-[1]">
          <slot name="articel" />
        </articel>
      </div>
      <aside class="shrink-0 lg:w-3/12 lg:flex hidden">
        <slot name="aside" />
      </aside>
    </div>
    <footer class="lg:flex hidden">
      <slot name="footer" />
    </footer>
  </div>
</template>
