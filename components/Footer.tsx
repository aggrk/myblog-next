"use client";
import {
  EnvelopeIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="mt-12 w-full overflow-hidden py-8 border-t border-gray-200 bg-textcolor">
      <div className="container mx-auto px-4 text-center space-y-6">
        <div className="flex justify-center gap-6">
          <a
            href="mailto:kenndeconstruct@gmail.com"
            aria-label="Email"
            className="text-bgcolor/70 hover:text-bgcolor transition"
          >
            <EnvelopeIcon className="w-5 h-5" />
          </a>

          <a
            href="https://x.com/kenndeconstruct"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="text-bgcolor/70 hover:text-bgcolor transition"
          >
            <FaXTwitter className="h-5 w-5 sm:h-6 sm:w-6" />
          </a>

          <a
            href="https://truthsocial.com/kenndeconstruct"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Truth Social"
            className="text-bgcolor/70 hover:text-bgcolor transition"
          >
            <ArrowTopRightOnSquareIcon className="w-5 h-5" />
          </a>
        </div>
        <div className="text-bgcolor/70 text-xs space-y-2">
          <p className="font-medium text-bgcolor/80">
            Favorite Podcasts & Shows
          </p>

          <div className="flex flex-wrap justify-center gap-x-3 gap-y-1">
            <a
              href="https://open.spotify.com/show/770WPA1HnBVJ3b2gzliMDJ"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-bgcolor transition"
            >
              The Atheist Experience
            </a>
            <span>•</span>
            <a
              href="https://open.spotify.com/show/4JBhCa3Ly3dCwQrneaRMJS"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-bgcolor transition"
            >
              Graceful Atheist Podcast
            </a>
            <span>•</span>
            <a
              href="https://open.spotify.com/show/0ofXAdFIQQRsCYj9754UFx"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-bgcolor transition"
            >
              Staffs you should know
            </a>
            <span>•</span>
            <a
              href="https://open.spotify.com/show/1vzwc2t43VZ2Q0NdignMWT"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-bgcolor transition"
            >
              Former Adventist
            </a>
            <span>•</span>
            <a
              href="https://open.spotify.com/show/2GZWDnJq62OfLDgVGKdT3r"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-bgcolor transition"
            >
              Adventist History Podcast
            </a>
            <span>•</span>
            <a
              href="https://open.spotify.com/show/0GZE8Nt4M5qegprDsGYvla"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-bgcolor transition"
            >
              Nader Mansour Bible Program
            </a>
            <span>•</span>
            <a
              href=" https://www.noiser.com/podcasts"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-bgcolor transition"
            >
              Noiser Podcasts
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
