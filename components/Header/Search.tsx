"use client";
import { getSearchedData } from "@/lib/search/api";
import {
  SearchContainer,
  SearchResults,
  SearchResultsItem,
} from "@/styles/HomeStyles";
import { debounce } from "@/utils/debounce";
import { Input } from "@nextui-org/react";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";

interface SearchResult {
  type: string;
  title: string;
  id: string;
}

const Search = (): React.ReactElement => {
  const [searchResult, setSearchResult] = useState<SearchResult[]>([]);
  const [input, setInput] = useState("");
  const [resultDisplay, setResultDisplay] = useState(false);
  const resultsRef = useRef<HTMLDivElement | null>(null);

  const debouncedSearch = useMemo(
    () =>
      debounce(async (query: string) => {
        if (query.length > 0) {
          try {
            const data = await getSearchedData(query);
            setSearchResult(data);
          } catch (error) {
            console.error("Failed to fetch search data:", error);
            setSearchResult([]);
          }
        } else {
          setSearchResult([]);
        }
      }, 300),
    [],
  );

  const handleSearch = useCallback(
    (query: string) => {
      debouncedSearch(query);
    },
    [debouncedSearch],
  );

  const handleFocus = () => {
    setResultDisplay(true);
  };

  const handleBlur = () => {
    setTimeout(() => {
      if (!resultsRef.current?.contains(document.activeElement)) {
        setResultDisplay(false);
        setInput("");
      }
    }, 200);
  };

  useEffect(() => {
    handleSearch(input);
  }, [handleSearch, input]);

  return (
    <SearchContainer onFocus={handleFocus} onBlur={handleBlur}>
      <Input
        onChange={(e) => setInput(e.target.value)}
        value={input}
        isClearable
        type="text"
        radius="lg"
        variant="bordered"
        classNames={{
          inputWrapper: ["bg-[var(--background-light)]", "border-0", "z-10"],
        }}
        placeholder="Почніть писати для пошуку..."
        startContent={
          <CiSearch className="pointer-events-none flex-shrink-0" />
        }
      />
      {resultDisplay && searchResult.length > 0 && (
        <SearchResults ref={resultsRef}>
          {searchResult.map((result, index) => (
            <Link key={index} href={`/${result.type}/${result.id}`}>
              <SearchResultsItem>{result.title}</SearchResultsItem>
            </Link>
          ))}
        </SearchResults>
      )}
    </SearchContainer>
  );
};

export default Search;
