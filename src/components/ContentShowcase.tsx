import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Heart, MessageCircle, Share2, Play, Image, Video, Calendar, Eye } from 'lucide-react'

const ContentShowcase: React.FC = () => {
  const featuredPosts = [
    {
      id: 1,
      title: 'Summer Fashion Haul 2024',
      category: 'Fashion',
      views: '2.1M',
      likes: '45K',
      comments: '1.2K',
      image: '/placeholder-fashion.jpg',
      type: 'video',
      date: '2 days ago'
    },
    {
      id: 2,
      title: 'Morning Routine & Skincare Tips',
      category: 'Lifestyle',
      views: '1.8M',
      likes: '38K',
      comments: '890',
      image: '/placeholder-lifestyle.jpg',
      type: 'image',
      date: '1 week ago'
    },
    {
      id: 3,
      title: 'Travel Vlog: Paris Fashion Week',
      category: 'Travel',
      views: '3.2M',
      likes: '67K',
      comments: '2.1K',
      image: '/placeholder-travel.jpg',
      type: 'video',
      date: '2 weeks ago'
    }
  ]

  const contentCategories = [
    { name: 'Fashion', count: '150+', color: 'from-pink-500 to-purple-600' },
    { name: 'Beauty', count: '120+', color: 'from-purple-500 to-indigo-600' },
    { name: 'Lifestyle', count: '200+', color: 'from-blue-500 to-cyan-600' },
    { name: 'Travel', count: '80+', color: 'from-green-500 to-emerald-600' },
    { name: 'Fitness', count: '60+', color: 'from-orange-500 to-red-600' },
    { name: 'Food', count: '90+', color: 'from-yellow-500 to-orange-600' }
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Featured Content</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Check out some of my most popular posts and discover what my community loves!
          </p>
        </div>

        {/* Featured Posts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover-lift border-0 shadow-lg">
              <div className="relative">
                <div className="w-full h-48 bg-gradient-to-br from-purple-200 to-pink-200 flex items-center justify-center">
                  <span className="text-gray-500">Post Image</span>
                </div>
                {post.type === 'video' && (
                  <div className="absolute top-4 right-4 bg-black/70 text-white p-2 rounded-full">
                    <Play className="w-4 h-4" />
                  </div>
                )}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                  {post.category}
                </div>
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {post.views}
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      {post.likes}
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4" />
                      {post.comments}
                    </div>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  View Post
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Content Categories */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Content Categories</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentCategories.map((category, index) => (
              <Card key={index} className="text-center hover-lift border-0 shadow-lg bg-gradient-to-br from-gray-50 to-gray-100">
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    {category.name === 'Fashion' && <Image className="w-8 h-8 text-white" />}
                    {category.name === 'Beauty' && <Image className="w-8 h-8 text-white" />}
                    {category.name === 'Lifestyle' && <Image className="w-8 h-8 text-white" />}
                    {category.name === 'Travel' && <Image className="w-8 h-8 text-white" />}
                    {category.name === 'Fitness' && <Image className="w-8 h-8 text-white" />}
                    {category.name === 'Food' && <Image className="w-8 h-8 text-white" />}
                  </div>
                  <CardTitle className="text-xl text-gray-800">{category.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{category.count} posts</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">Want More Content?</h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Follow me on social media for daily updates, exclusive behind-the-scenes content, and more!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 py-3 text-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg hover-lift">
              View All Posts
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 text-lg border-2 hover-lift">
              Subscribe to Newsletter
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContentShowcase
