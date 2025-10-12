'use client'
import { forwardRef, Button, ButtonProps } from "@chakra-ui/react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect } from "react";

export interface NavLinkProps extends ButtonProps {
  isActive?: boolean;
  href?: string;
  id?: string;
}

// Función para hacer scroll suave con offset del header
const scrollToElement = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const headerOffset = 100; // Offset para el header fijo
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

export const NavLink = forwardRef<NavLinkProps, "a">((props, ref) => {
  const { href, type, isActive, ...rest } = props;
  const router = useRouter();
  const pathname = usePathname();

  // Hook para manejar scroll cuando se carga la página con hash
  useEffect(() => {
    if (typeof window !== 'undefined' && pathname === '/') {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace('#', '');
        // Esperar un poco para que el DOM esté completamente cargado
        setTimeout(() => {
          scrollToElement(id);
        }, 300);
      }
    }
  }, [pathname]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Si es un link con ancla (#)
    if (href?.startsWith('/#')) {
      e.preventDefault();
      const id = href.replace('/#', '');
      
      // Si estamos en la página principal
      if (pathname === '/') {
        // Hacer scroll suave directamente
        scrollToElement(id);
        // Actualizar la URL
        window.history.pushState(null, '', href);
      } else {
        // Si estamos en otra página, navegar con el hash
        router.push(href);
      }
    }
  };

  return (
    <Button
      as={Link}
      href={href}
      ref={ref}
      variant="nav-link"
      lineHeight="2rem"
      isActive={isActive}
      fontWeight="medium"
      onClick={handleClick}
      {...rest}
    />
  );
});

NavLink.displayName = "NavLink";
