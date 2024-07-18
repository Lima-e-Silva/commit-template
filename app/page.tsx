"use client";
import { Check } from "@/components/Check";
import { SelectMenu } from "@/components/Select";
import { SelectMenuPrefix } from "@/components/SelectPrefix";
import { Input } from "@/components/ui/input";
import { useState } from "react";

import { Button } from "@/components/ui/button";

import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";

export default function Home() {
  const { toast } = useToast();

  const languages = [
    {
      value: "pt",
      label: "Português",
    },

    {
      value: "en",
      label: "English",
    },
  ];

  const commits = [
    {
      id: 0,
      icon: "🎉",

      ptTitle: "Inicial",
      ptDesc: "Enviar base de código inicial ou configuração do projeto",
      ptCode: "Commit Inicial",

      enTitle: "Initial",
      enDesc: "Send base code or project configuration",
      enCode: "Initial Commit",
    },

    {
      id: 1,
      icon: "🔖",

      ptTitle: "Versão",
      ptDesc: "Atualizar ou gravar versão",
      ptCode: "Versão",

      enTitle: "Version",
      enDesc: "Update or tag version",
      enCode: "Version",
    },

    {
      id: 2,
      icon: "✨",

      ptTitle: "Funcionalidade",
      ptDesc: "Adicionar nova finalidade",
      ptCode: "Funcionalidade",

      enTitle: "Feature",
      enDesc: "Add new feature",
      enCode: "Feat",
    },

    {
      id: 3,
      icon: "🐛",

      ptTitle: "Correção",
      ptDesc: "Corrigir bug",
      ptCode: "Correção",

      enTitle: "Bug Fix",
      enDesc: "Fix bug",
      enCode: "Fix",
    },

    {
      id: 4,
      icon: "🔒",

      ptTitle: "Segurança",
      ptDesc: "Corrigir vulnerabilidade",
      ptCode: "Segurança",

      enTitle: "Security",
      enDesc: "Fix vulnerability",
      enCode: "Security",
    },

    {
      id: 5,
      icon: "♻️",

      ptTitle: "Refatoração",
      ptDesc: "Modificar código sem alterar comportamento externo",
      ptCode: "Refatoração",

      enTitle: "Refactor",
      enDesc: "Modify code without changing external behavior",
      enCode: "Refactor",
    },

    {
      id: 6,
      icon: "📚",

      ptTitle: "Documentação",
      ptDesc: "Adicionar ou atualizar arquivos de documentação",
      ptCode: "Documentação",

      enTitle: "Documentation",
      enDesc: "Add or update documentation files",
      enCode: "Docs",
    },

    {
      id: 7,
      icon: "🐎",

      ptTitle: "Performance",
      ptDesc: "Otimizar o código para melhorar desempenho",
      ptCode: "Performance",

      enTitle: "Performance",
      enDesc: "Optimize code to improve performance",
      enCode: "Perf",
    },

    {
      id: 8,
      icon: "🎨",

      ptTitle: "Cosmético",
      ptDesc: "Melhorar formatação, indentação ou estilo",
      ptCode: "Estilo",

      enTitle: "Cosmetic",
      enDesc: "Improve formatting, indentation or style",
      enCode: "Style",
    },
  ];

  function copyClipboard() {
    const icon = commits[commitChoice]["icon"];
    const title =
      languageChoice === "pt"
        ? commits[commitChoice]["ptCode"]
        : commits[commitChoice]["enCode"];
    const text =
      commitText === ""
        ? `${icon} ${title}`
        : `${icon} ${title} - ${commitText}`;
    navigator.clipboard.writeText(text);
  }

  const [languageChoice, setLanguageChoice] = useState(languages[0].value);
  const [commitChoice, setCommitChoice] = useState(commits[0].id);
  var [commitText, setCommitText] = useState("");

  function changeLanguage(value: string) {
    setLanguageChoice(value);
  }

  function changeCommit(value: string) {
    setCommitChoice(Number(value));
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-8">
      <h1 className=" text-5xl font-extrabold text-zinc-700">
        Commit Template
      </h1>
      <h3>Uma maneira simples de padronizar seus commits.</h3>

      <div className="flex flex-col gap-3 w-[20rem] md:w-[30rem]">
        <SelectMenu
          onValueChange={changeLanguage}
          options={languages}
          placeholder="Idioma"
        />
        <SelectMenuPrefix
          onValueChange={changeCommit}
          options={commits}
          placeholder="Tag"
          prefix={languageChoice}
        />

        <Input
          onChange={(e) => setCommitText(e.target.value)}
          className="border w-100%"
          placeholder="Ao aplicar esse commit, ele irá ..."
        />
        <Check variable={commitText} type="first-uppercase"></Check>
        <Button
          className="w-full mt-4"
          onClick={() => {
            copyClipboard();
            toast({
              title: "Copiado para a area de transferência",
              duration: 1500,
            });
          }}
        >
          Gerar Título
        </Button>
      </div>
      <Toaster />
    </main>
  );
}
